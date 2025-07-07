import React, { createContext, useContext, useState } from 'react'

type AuthModalType = 'login' | 'signup' | 'reset' | 'profile' | null

interface AuthUIContextType {
  activeModal: AuthModalType
  openModal: (modal: AuthModalType) => void
  closeModal: () => void
}

const AuthUIContext = createContext<AuthUIContextType | undefined>(undefined)

export const AuthUIProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [activeModal, setActiveModal] = useState<AuthModalType>(null)

  const openModal = (modal: AuthModalType) => {
    setActiveModal(modal)
  }

  const closeModal = () => {
    setActiveModal(null)
  }

  return (
    <AuthUIContext.Provider value={{ activeModal, openModal, closeModal }}>
      {children}
    </AuthUIContext.Provider>
  )
}

export const useAuthUI = () => {
  const context = useContext(AuthUIContext)
  if (context === undefined) {
    throw new Error('useAuthUI must be used within an AuthUIProvider')
  }
  return context
}
