"use client"
import * as React from "react"
import { ComingSoonOverlay } from "./coming-soon-overlay"

export function ComingSoonWrapper({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <ComingSoonOverlay />
    </>
  )
}
