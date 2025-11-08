import type React from "react"

export type FittingType = "fit" | "fill"

export interface ImageData {
  id: string
  width: number
  height: number
}

export interface PlaceholderOptions {
  htmlTag?: string
}

export interface PlaceholderResult {
  uri: string
  css: {
    img?: React.CSSProperties
  }
  attr?: Record<string, any>
}

// Stub implementation of getPlaceholder for Wix image handling
export function getPlaceholder(
  fittingType: FittingType,
  imageData: ImageData,
  options?: PlaceholderOptions,
): PlaceholderResult {
  return {
    uri: "",
    css: {
      img: {
        width: "100%",
        height: "auto",
        display: "block",
      },
    },
    attr: {},
  }
}

// Stub implementation of sdk with Wix image scaling methods
export const sdk = {
  getScaleToFitImageURL: (
    imageId: string,
    originalWidth: number,
    originalHeight: number,
    targetWidth: number,
    targetHeight: number,
  ): string => {
    // Stub: return placeholder URL since this is Wix-specific
    return "/placeholder.svg"
  },
  getScaleToFillImageURL: (
    imageId: string,
    originalWidth: number,
    originalHeight: number,
    targetWidth: number,
    targetHeight: number,
  ): string => {
    // Stub: return placeholder URL since this is Wix-specific
    return "/placeholder.svg"
  },
}
