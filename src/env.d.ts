/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

declare namespace astroHTML.JSX {
    interface HTMLAttributes {
      _?: string | null | undefined
    }
  }