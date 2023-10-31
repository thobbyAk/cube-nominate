import React, { useEffect } from "react";
import NominationTable from "../Components/Table";
import EmptyNomination from "../Components/EmptyState";
import { useQuery } from "@tanstack/react-query";
import { getAllNominations } from "../api/nomination";
import { useAppDispatch } from "../services/Store/hooks";
import { handleSetNominations } from "../services/Reducers/nominationsReducer";

const MyNomination = () => {
	const dispatch = useAppDispatch();

	const { data } = useQuery({
		queryKey: ["nominations"],
		queryFn: () => getAllNominations(),
	});
	useEffect(() => {
		dispatch(handleSetNominations(data?.data));
	}, [data, dispatch]);
	return (
		<>
			{data?.data?.length === 0 ? (
				<EmptyNomination />
			) : (
				<div className=" md:px-20 py-8">
					<div className="uppercase text-left text-black text-base md:text-2xl font-poppins font-bold">
						Your nominations
					</div>
					<div className="min-h-screen mt-5">
						<NominationTable />
					</div>
				</div>
			)}
		</>
	);
};

export default MyNomination;
