import { useCallback, useState } from "react";

export function useControlModal() {
  	const [isModalOpen, setIsModalOpen] = useState(false);

    const close = useCallback(() => {
      setIsModalOpen(false)
    }, [])

    const open = useCallback(() => {
      setIsModalOpen(true)
    }, [])

    return {
      openModal: open,
      closeModal: close,
      modalProps: {
        isOpen: isModalOpen,
        onClose: close
      }
    }
}