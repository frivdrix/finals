"use client"

import { createContext, useContext, type ReactNode } from "react"

export interface MemberContextType {
  isAuthenticated: boolean
  isLoading: boolean
  actions: {
    login: () => void
    logout: () => void
  }
}

const MemberContext = createContext<MemberContextType | undefined>(undefined)

export function MemberProvider({ children }: { children: ReactNode }) {
  const value: MemberContextType = {
    isAuthenticated: false,
    isLoading: false,
    actions: {
      login: () => console.log("Login not implemented"),
      logout: () => console.log("Logout not implemented"),
    },
  }

  return <MemberContext.Provider value={value}>{children}</MemberContext.Provider>
}

export function useMember() {
  const context = useContext(MemberContext)
  if (!context) {
    throw new Error("useMember must be used within MemberProvider")
  }
  return context
}

export interface ApiResponse<T> {
  items: T[]
  total?: number
}

export class BaseCrudService {
  private static baseUrl = ""

  static async getAll<T>(endpoint: string): Promise<ApiResponse<T>> {
    try {
      const response = await fetch(`${this.baseUrl}/api/${endpoint}`)

      if (!response.ok) {
        console.warn(`API endpoint /api/${endpoint} returned status ${response.status}`)
        return { items: [] }
      }

      const contentType = response.headers.get("content-type")
      if (!contentType?.includes("application/json")) {
        console.warn(`API endpoint /api/${endpoint} returned non-JSON response`)
        return { items: [] }
      }

      return response.json()
    } catch (error) {
      console.error(`Error fetching ${endpoint}:`, error)
      return { items: [] }
    }
  }

  static async get<T>(endpoint: string): Promise<T> {
    try {
      const response = await fetch(`${this.baseUrl}/api/${endpoint}`)
      if (!response.ok) throw new Error(`Failed to fetch ${endpoint}`)
      return response.json()
    } catch (error) {
      console.error(`Error fetching ${endpoint}:`, error)
      throw error
    }
  }

  static async post<T>(endpoint: string, data: unknown): Promise<T> {
    try {
      const response = await fetch(`${this.baseUrl}/api/${endpoint}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
      if (!response.ok) throw new Error(`Failed to post to ${endpoint}`)
      return response.json()
    } catch (error) {
      console.error(`Error posting to ${endpoint}:`, error)
      throw error
    }
  }
}

export type { MemberContextType }
