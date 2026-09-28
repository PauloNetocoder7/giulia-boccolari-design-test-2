import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Send, AlertCircle, Loader2 } from 'lucide-react';

/**
 * CONFIGURAZIONE SERVIZIO CLIENT-SIDE PER L'INVIO EMAIL:
 * Sostituisci questo endpoint o la tua Access Key con quella fornita da Web3Forms o Formspree.
 * 
 * Esempio Web3Forms: https://api.web3forms.com/submit (e imposta FORM_ACCESS_KEY sotto)
 * Esempio Formspree: https://formspree.io/f/TUO_ID_FORM
 */
export const FORM_ENDPOINT = 'https://api.web3forms.com/submit';
export const FORM_ACCESS_KEY: string = 'INSERISCI_QUI_LA_TUA_CHIAVE_WEB3FORMS_O_ENDPOINT';

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    nome: '',
    contatto: '', // Email o telefono
    fasciaEta: 'bambino', // bambino | ragazzo | adulto
    modalita: 'presenza-modena', // presenza-modena | online | indifferente
    messaggio: '',
    consensoPrivacy: false,
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.consensoPrivacy) {
      setStatus('error');
      setErrorMessage('È necessario prestare il consenso al trattamento dei dati personali.');
      return;
    }

    if (!formData.nome.trim() || !formData.contatto.trim() || !formData.messaggio.trim()) {
      setStatus('error');
      setErrorMessage('Compila tutti i campi obbligatori prima di inviare.');
      return;
    }

    setStatus('submitting');
    setErrorMessage('');

    try {
      // Se l'utente non ha ancora inserito la propria chiave reale, forniamo una simulazione di successo
      // per consentire il test immediato in preview
      if (
        FORM_ACCESS_KEY === 'INSERISCI_QUI_LA_TUA_CHIAVE_WEB3FORMS_O_ENDPOINT' ||
        FORM_ACCESS_KEY.includes('INSERISCI')
      ) {
        // Simulazione di rete con ritardo realistico
        await new Promise((resolve) => setTimeout(resolve, 800));
        setStatus('success');
        return;
      }

      // Invio reale tramite API Web3Forms / Formspree
      const payload = {
        access_key: FORM_ACCESS_KEY,
        name: formData.nome,
        contact: formData.contatto,
        fascia_eta: formData.fasciaEta,
        modalita_preferita: formData.modalita,
        message: formData.messaggio,
        subject: `Nuova richiesta da ${formData.nome} - Dott.ssa Giulia Boccolari`,
      };

      const response = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        setStatus('success');
      } else {
        throw new Error('Errore durante l\'invio del messaggio.');
      }
    } catch {
      setStatus('error');
      setErrorMessage(
        'Si è verificato un errore nell\'invio del form. Puoi scrivermi direttamente a giulia.boccolari@gmail.com o chiamarmi al 342 9238516.'
      );
    }
  };

  if (status === 'success') {
    return (
      <div className="bg-marmo border border-ferro/40 border-t-4 border-t-salvia px-8 md:px-12 py-12 text-center space-y-4" role="status">
        <h3 className="display-m text-ferro">
          Grazie per avermi contattata
        </h3>
        <p className="text-[1rem] text-antracite max-w-md mx-auto leading-relaxed">
          Ho ricevuto la tua richiesta. Ti risponderò al più presto (solitamente entro 24-48 ore lavorative)
          all'indirizzo o al recapito indicato.
        </p>
        <div className="pt-4">
          <button
            type="button"
            onClick={() => {
              setStatus('idle');
              setFormData({
                nome: '',
                contatto: '',
                fasciaEta: 'bambino',
                modalita: 'presenza-modena',
                messaggio: '',
                consensoPrivacy: false,
              });
            }}
            className="door door--marble"
          >
            Invia un altro messaggio
          </button>
        </div>
      </div>
    );
  }

  const label = 'block civic !text-[0.7rem] text-ferro mb-2';

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="plaster-rosa limewash p-6 sm:p-9 md:p-11 space-y-6"
    >
      <div className="pb-5 border-b border-ferro/40">
        <h3 className="display-m text-ferro">
          Invia un messaggio per un primo confronto
        </h3>
        <p className="text-[0.95rem] text-ferro mt-2">
          Compila i campi sottostanti per raccontarmi brevemente la tua situazione.
        </p>
      </div>

      {status === 'error' && errorMessage && (
        <div role="alert" className="p-4 bg-marmo shadow-[inset_0_0_0_1px_#A33A2A] text-[0.95rem] text-[#8A2E20] flex items-start gap-3">
          <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
          <p>{errorMessage}</p>
        </div>
      )}

      <div>
        <label htmlFor="nome" className={label}>
          Nome e Cognome *
        </label>
        <input
          type="text"
          id="nome"
          name="nome"
          required
          autoComplete="name"
          value={formData.nome}
          onChange={handleChange}
          placeholder="Es. Mario Rossi"
          className="field"
        />
      </div>

      <div>
        <label htmlFor="contatto" className={label}>
          E-mail o Numero di Telefono *
        </label>
        <input
          type="text"
          id="contatto"
          name="contatto"
          required
          value={formData.contatto}
          onChange={handleChange}
          placeholder="es. mario.rossi@email.it oppure 333 1234567"
          className="field"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="fasciaEta" className={label}>
            Fascia di età *
          </label>
          <select id="fasciaEta" name="fasciaEta" value={formData.fasciaEta} onChange={handleChange} className="field cursor-pointer">
            <option value="bambino">Bambino (età evolutiva)</option>
            <option value="ragazzo">Ragazzo / Adolescente</option>
            <option value="adulto">Adulto / Giovane adulto</option>
          </select>
        </div>

        <div>
          <label htmlFor="modalita" className={label}>
            Preferenza incontro *
          </label>
          <select id="modalita" name="modalita" value={formData.modalita} onChange={handleChange} className="field cursor-pointer">
            <option value="presenza-modena">In presenza a Modena</option>
            <option value="online">Online</option>
            <option value="indifferente">Indifferente / Da valutare</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="messaggio" className={label}>
          Breve motivo della richiesta *
        </label>
        <textarea
          id="messaggio"
          name="messaggio"
          required
          rows={5}
          value={formData.messaggio}
          onChange={handleChange}
          placeholder="Descrivi brevemente la motivazione del contatto, eventuali diagnosi note o le difficoltà principali..."
          className="field resize-y"
        />
      </div>

      <div className="pt-1">
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            name="consensoPrivacy"
            checked={formData.consensoPrivacy}
            onChange={handleChange}
            className="mt-1 w-5 h-5 shrink-0 accent-[var(--color-terracotta-deep)] cursor-pointer"
          />
          <span className="text-[0.92rem] text-ferro leading-normal">
            Ho letto e accetto il trattamento dei dati personali ai sensi del Regolamento UE 2016/679 (GDPR)
            secondo l'
            <Link to="/privacy" className="underline font-bold hover:text-terracotta-ink">
              Informativa Privacy
            </Link>
            . *
          </span>
        </label>
      </div>

      <div className="pt-2">
        <button
          type="submit"
          disabled={status === 'submitting'}
          className="door door--iron w-full sm:w-auto"
        >
          {status === 'submitting' ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>Invio in corso...</span>
            </>
          ) : (
            <>
              <span>Invia la richiesta</span>
              <Send className="w-4 h-4" />
            </>
          )}
        </button>
      </div>
    </form>
  );
};
