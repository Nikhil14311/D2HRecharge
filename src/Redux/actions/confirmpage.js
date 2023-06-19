import { CONFIRM } from "../constants"
export function confirmPage(transactionHistory) {
    return {
        type: CONFIRM,
        payload: transactionHistory
    }
}