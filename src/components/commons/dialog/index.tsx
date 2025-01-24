import { DialogProvider, DialogRoot, useDialogContext } from "./dialog-root"
import { DialogHeader } from "./dialog-header"
import { DialogAction } from "./dialog-action"
import { DialogActions } from "./dialog-actions"

export const Dialog = {
  Root: DialogRoot,
  Provider: DialogProvider,
  Header: DialogHeader,
  Action: DialogAction,
  ActionsContainer: DialogActions,
  useDialogContext
}