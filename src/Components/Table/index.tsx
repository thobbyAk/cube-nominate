import React, { useEffect, useState } from "react";
import { EditIcon, TrashIcon } from "../../Assets/Icons";
import Modal from "../Modal";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { fetchDeleteNomination, getAllNominees } from "../../api/nomination";
import {
	useAppDispatch,
	useAppStateSelector,
} from "../../services/Store/hooks";
import {
	handleSetNominees,
	handleSubmitNomination,
} from "../../services/Reducers/nominationsReducer";
import { fetchNomineeNameByIdForTable } from "../../Utils/helper";
import toast from "react-hot-toast";
import { NominationPayload } from "../../Utils/types";
import { useNavigate } from "react-router-dom";

const NominationTable = () => {
	const navigate = useNavigate();
	const [openDeleteModal, setOpenDeleteModal] = useState(false);
	const [nominationId, setNominationId] = useState("");
	const { nominees, nominations } = useAppStateSelector(
		(state) => state.nominationState
	);
	const queryClient = useQueryClient();
	const dispatch = useAppDispatch();

	const handleDeleteNomination = () => {
		mutate(nominationId);
	};

	const { data } = useQuery({
		queryKey: ["nominees"],
		queryFn: () => getAllNominees(),
	});

	const { error, isPending, mutate } = useMutation({
		mutationFn: (nominationId: string) => fetchDeleteNomination(nominationId),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["nominations"] });
			setOpenDeleteModal(false);
			setNominationId("");
			toast.success("nomination deleted successfully");
		},
	});

	if (error) {
		console.log(" error occurred while deleting nomination" + error);
	}

	useEffect(() => {
		dispatch(handleSetNominees(data?.data));
	}, [data?.data, dispatch]);

	const handleEditNomination = (nomination: NominationPayload) => {
		dispatch(handleSubmitNomination(nomination));
		navigate("/nominate");
	};

	return (
		<>
			<div className="overflow-x-auto">
				<table className="min-w-full  divide-y divide-customGrey-300">
					<thead>
						<tr>
							<th className="px-6 text-left py-3 bg-customGrey-300 text-base uppercase font-poppins font-bold tracking-wider">
								Nominee
							</th>
							<th className="px-6 text-left py-3 bg-customGrey-300 text-base uppercase font-poppins font-bold tracking-wider">
								Date Submitted
							</th>
							<th className="px-6 text-left py-3 bg-customGrey-300 text-base uppercase font-poppins font-bold tracking-wider">
								Reason
							</th>
							<th className="px-6 text-left py-3 bg-customGrey-300 text-base uppercase font-poppins font-bold tracking-wider">
								Process
							</th>
							<th className="px-6 text-left py-3 bg-customGrey-300 text-base uppercase font-poppins font-bold tracking-wider"></th>
						</tr>
					</thead>
					<tbody className="bg-white divide-y divide-customGrey-300">
						{nominations?.map((item, index) => (
							<tr key={index}>
								<td className="px-6 py-4 whitespace-no-wrap font-anonpro text-base">
									{fetchNomineeNameByIdForTable(item?.nominee_id, nominees)}
								</td>
								<td className="px-6 py-4 whitespace-no-wrap font-anonpro text-base">
									{item?.date_submitted}
								</td>
								<td className="px-6 py-4 whitespace-no-wrap font-anonpro text-base">
									{item?.reason?.slice(0, 36)}
									{item?.reason?.length > 36 && "..."}
								</td>
								<td className="px-6 py-4 whitespace-no-wrap font-anonpro text-base">
									{item?.process}
								</td>
								<td className="px-6 py-4 whitespace-no-wrap">
									<div className="flex gap-3 flex-row">
										<div
											className="cursor-pointer"
											onClick={() => {
												setNominationId(item.nomination_id);
												setOpenDeleteModal(true);
											}}
										>
											<TrashIcon />
										</div>
										<div
											onClick={() => handleEditNomination(item)}
											className="cursor-pointer"
										>
											<EditIcon />
										</div>
									</div>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>

			<Modal
				header="Delete this nomination?"
				body="If you delete this nomination, the nominee will no longer be put forward by you."
				action="Yes, delete"
				setAction={handleDeleteNomination}
				open={openDeleteModal}
				isLoading={isPending}
				onClose={() => setOpenDeleteModal(false)}
			/>
		</>
	);
};

export default NominationTable;
