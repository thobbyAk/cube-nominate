import { Nominees } from "./types";

export const fetchNomineeNameByIdForTable = (nomineeId: string, nomineeArray: Array<Nominees>) => {
    if (nomineeId) {
        const selectedNominee = nomineeArray?.find(
            (nominee: Nominees) => nominee?.nominee_id === nomineeId
        );

        return selectedNominee?.last_name + " " + selectedNominee?.first_name
    }


}

