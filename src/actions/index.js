export const COST = "COST";

export function getBalance ( balance ) {
    return {
        type: COST,
        payload: balance
    };
}