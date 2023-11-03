import { useExitIntent } from "use-exit-intent";
import { useEffect } from "preact/hooks";

export default function ExitIntent() {

  const exitIntent = useExitIntent({
    "cookie": {
      "daysToExpire": 30,
      "key": "exit-intent"
    },
    "desktop": {
      "triggerOnIdle": false,
      "useBeforeUnload": false,
      "triggerOnMouseLeave": true,
      "delayInSecondsToTrigger": 1
    }
  })

  useEffect(() => {
    exitIntent.registerHandler({
      id: 'open-modal',
      handler: () => {
        alert('open modal')
      }
    })
  }, []);
  
  return <></>
}