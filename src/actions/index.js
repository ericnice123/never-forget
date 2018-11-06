export const COSTS = "COSTS";

export function getCosts ( costs ) {
    return {
        type: COSTS,
        payload: costs
    };
}