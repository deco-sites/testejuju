import exitIntent from "https://esm.sh/exit-intent@1.1.0?alias=react:preact/compat&react-dom:preact/compat&deps=preact@10.15.1";
import { useEffect } from "preact/hooks";
import { useDisclosure } from "../../hooks/useDisclosure.ts";
import Modal from "$store/components/ui/Modal.tsx";

export default function ExitIntent() {

  const { isOpen, open, toggle, close } = useDisclosure();

  useEffect(() => {
    const exitIntentOptions = {
      threshold: 50,
      maxDisplays: 1,
      eventThrottle: 100,
      onExitIntent: () => {
        open();
      }    
    };

    const exitIntentInstance = exitIntent(exitIntentOptions);

    return () => {
      exitIntentInstance();
    }
  }, [open]);
  
  return (
    <Modal open={isOpen} onClose={toggle}>
      <div class="modal-box">
        <div class="flex flex-col items-center justify-center">
          <h1 class="text-4xl font-bold">Poxa, você já vai? 🙁</h1>
          <p class="text-lg mt-2">Aproveite as nossas promoções</p>
          <button class="btn btn-primary mt-4" onClick={close}>Quero conferir uma oferta</button>
          <button class="btn btn-secondary mt-2" onClick={close}>Não, quero sair</button>
        </div>
      </div>
    </Modal>
  )
}