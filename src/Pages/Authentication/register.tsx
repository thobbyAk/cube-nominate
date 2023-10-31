import React from "react";
import * as yup from "yup";
import { FormGroup, Input } from "../../Components/Inputs";
import { CautionIcon } from "../../Assets/Icons";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { createUser } from "../../api/auth";
import { RegisterPayload } from "../../Utils/types";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { PrimaryButton } from "../../Components/Buttons";
import toast from "react-hot-toast";

const schema = yup.object().shape({
	name: yup.string().min(3).required("Please enter Name"),
	email: yup.string().email().required("Please enter a valid Email"),
	password: yup.string().min(8).required("Please enter your password"),
});

const RegisterScreen = () => {
	const navigate = useNavigate();
	const { error, mutate, isPending } = useMutation({
		mutationFn: (payload: RegisterPayload) => createUser(payload),
		onSuccess: (data) => {
			reset();
			toast.success("user registered successfully");
			navigate("/");
		},
	});
	if (error) {
		console.log("error", error);
	}
	const {
		register,
		formState: { errors },
		reset,
		handleSubmit,
	} = useForm({
		resolver: yupResolver(schema),
	});

	const onSubmit = async (data: RegisterPayload) => {
		mutate(data);
	};
	return (
		<div className="flex justify-center py-9 items-center">
			<div className="w-full md:w-[55rem] p-7 bg-white">
				<div className=" mt-4 uppercase text-center text-black text-base md:text-xl font-poppins font-bold">
					Register{" "}
				</div>

				<div className="flex justify-center mx-auto mt-9 flex-col">
					<form onSubmit={handleSubmit(onSubmit)}>
						<div className="flex justify-center ">
							<FormGroup
								className="md:w-[400px] w-full mb-4"
								required
								label="Full Name"
							>
								<Input
									placeholder="Enter Fullname"
									type="text"
									id="name"
									error={errors.name?.message as string}
									{...register("name")}
									iconRight={errors.name?.message ? <CautionIcon /> : <></>}
								/>
							</FormGroup>
						</div>
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
								name="Register"
							/>
						</div>
					</form>

					<div
						className={
							"text-[#333] mt-6 text-center text-xs md:text-base font-anonpro"
						}
					>
						Have an account?{" "}
						<span
							onClick={() => navigate("/")}
							className="text-[#333] text-center text-xs md:text-base font-anonpro font-bold cursor-pointer"
						>
							Login
						</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default RegisterScreen;
