import React from "react";
import * as yup from "yup";
import { FormGroup, Input } from "../../Components/Inputs";
import { PrimaryButton } from "../../Components/Buttons";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { CautionIcon } from "../../Assets/Icons";
import { useMutation } from "@tanstack/react-query";
import { LoginPayload } from "../../Utils/types";
import { login } from "../../api/auth";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../services/Store/hooks";
import toast from "react-hot-toast";
import { handleSetAuthToken } from "../../services/Reducers/authReducer";

const schema = yup.object().shape({
	email: yup.string().email().required("Please enter a valid Email"),
	password: yup.string().min(8).required("Please enter your password"),
});

const AuthenticationScreen = () => {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const { error, mutate, isPending } = useMutation({
		mutationFn: (payload: LoginPayload) => login(payload),
		onSuccess: (data) => {
			reset();

			toast.success("login successfully");
			if (data.data.authToken) dispatch(handleSetAuthToken(data.data.authToken));
			sessionStorage.setItem("accessToken", data.data.authToken);

			navigate("/get-started");
		},
	});
	if (error) {
		console.log("error", error);
	}
	const {
		register,
		reset,
		formState: { errors },
		handleSubmit,
	} = useForm({
		resolver: yupResolver(schema),
	});

	const onSubmit = async (data: LoginPayload) => {
		mutate(data);
	};

	return (
		<div className="flex justify-center py-9 items-center">
			<div className="w-full md:w-[55rem] p-7 bg-white">
				<div className=" mt-4 uppercase text-center text-black text-base md:text-xl font-poppins font-bold">
					Login{" "}
				</div>

				<div className="flex justify-center mx-auto mt-9 flex-col">
					<form onSubmit={handleSubmit(onSubmit)}>
						<div className="flex justify-center ">
							<FormGroup className="md:w-[400px] w-full mb-4" required label="Email">
								<Input
									placeholder="Enter Email"
									type="email"
									id="email"
									error={errors.email?.message as string}
									{...register("email")}
									iconRight={errors.email?.message ? <CautionIcon /> : <></>}
								/>
							</FormGroup>
						</div>
						<div className="flex justify-center ">
							<FormGroup className="md:w-[400px] w-full" required label="Password">
								<Input
									placeholder="Enter Password"
									type="password"
									error={errors.password?.message as string}
									{...register("password")}
									iconRight={errors.password?.message ? <CautionIcon /> : <></>}
								/>
							</FormGroup>
						</div>

						<div className="my-12 h-px bg-customGrey-200"></div>

						<div className="flex justify-center">
							<PrimaryButton
								loading={isPending}
								type="submit"
								className=" w-full md:w-72"
								isDisabled={Object.keys(errors).length > 0}
								name="login"
							/>
						</div>
					</form>

					<div
						className={
							"text-[#333] mt-6 text-center text-xs md:text-base font-anonpro"
						}
					>
						Dont have an account?{" "}
						<span
							onClick={() => navigate("/register")}
							className="text-[#333] text-center text-xs md:text-base font-anonpro font-bold cursor-pointer"
						>
							Register
						</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AuthenticationScreen;
