import React from 'react';

interface LogoProps {
  className?: string;
  size?: number;
}

export const Logo: React.FC<LogoProps> = ({ className = 'w-9 h-9 text-[#5C6A57]', size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 500 500"
      fill="none"
      stroke="currentColor"
      strokeWidth="6.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      width={size}
      height={size}
      className={className}
      aria-label="Logo Dott.ssa Giulia Boccolari - Due profili speculari che formano una mente"
    >
      {/* Outer Brain Lobes Contours */}
      <path d="M 250 125 C 220 120 185 125 155 140 C 130 152 110 175 95 205 C 80 235 82 270 95 300 C 105 322 125 342 145 352 C 160 360 178 362 195 360" />
      <path d="M 250 125 C 280 122 315 130 345 148 C 375 168 398 200 405 235 C 412 270 400 308 378 335 C 362 355 338 368 312 372" />

      {/* Brain Sulci & Folds */}
      <path d="M 175 132 C 185 155 210 168 235 165 C 248 163 260 155 268 145" />
      <path d="M 315 135 C 330 155 355 168 380 178" />
      <path d="M 115 185 C 135 180 160 190 170 210" />
      <path d="M 385 195 C 370 215 372 245 390 265" />
      <path d="M 90 250 C 105 252 120 245 130 235 C 145 220 155 195 165 170" />
      <path d="M 408 245 C 390 255 375 275 370 300" />

      {/* Left Profile (child/person) */}
      <path d="M 215 175 C 225 195 230 215 230 230 C 230 238 235 244 242 248 C 248 252 244 256 238 258 C 232 260 234 266 240 270 C 242 272 238 276 232 278 C 225 280 220 286 220 294 C 220 306 205 318 190 322 C 168 328 145 320 135 300 C 122 275 125 240 145 215 C 160 196 185 182 215 175 Z" />

      {/* Right Profile */}
      <path d="M 285 175 C 275 195 270 215 270 230 C 270 238 265 244 258 248 C 252 252 256 256 262 258 C 268 260 266 266 260 270 C 258 272 262 276 268 278 C 275 280 280 286 280 294 C 280 310 295 325 315 330 C 340 336 365 320 370 290 C 375 260 360 230 340 205 C 322 185 305 178 285 175 Z" />

      {/* Intertwining curves */}
      <path d="M 135 295 C 145 320 168 340 195 348 C 215 354 240 350 255 338" />
      <path d="M 365 295 C 355 325 335 348 305 358 C 285 365 265 360 250 348" />

      {/* Brain Stem */}
      <path d="M 290 365 C 298 385 305 405 315 422 C 320 432 328 438 335 430 C 340 422 335 405 328 385 C 324 372 318 365 310 360" />
      <path d="M 195 360 C 220 375 250 375 278 368" />

      {/* Graceful inner flow lines */}
      <path d="M 270 205 C 295 215 320 235 330 260 C 335 272 330 288 320 295" />
      <path d="M 230 205 C 205 215 180 235 170 260 C 165 272 170 288 180 295" />
    </svg>
  );
};
