import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import { Grid } from "@mui/material";
import { Typography } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { color } from "@mui/system";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Form from "react-bootstrap/Form";
import PropTypes from "prop-types";
import { Button } from "@mui/material";
import { styled } from "@mui/system";
import ImageOutlinedIcon from "@mui/icons-material/ImageOutlined";
import { ImageUploadButton } from "../addProduct/styles";
import axios from "axios";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { useParams } from "react-router-dom";
import { Carousel } from "antd";
import slider_1 from "../../assets/images/slider/Image-01.jpg";
import slider_2 from "../../assets/images/slider/Image-02.jpg";
import slider_3 from "../../assets/images/slider/Image-03.jpg";
import slider_4 from "../../assets/images/slider/Image-04.jpg";

const contentStyle = {
	height: "500px",
	color: "#fff",
	lineHeight: "25px",
	textAlign: "center",
	padding: "10px 150px",
};

const background1 = {
	backgroundImage: `url(${slider_1})`,
	backgroundRepeat: "none",
	backgroundSize: "cover",
	backgroundPosition: "cover",
};

const background2 = {
	backgroundImage: `url(${slider_2})`,
	backgroundRepeat: "none",
	backgroundSize: "cover",
	backgroundPosition: "cover",
};

const background3 = {
	backgroundImage: `url(${slider_3})`,
	backgroundRepeat: "none",
	backgroundSize: "cover",
	backgroundPosition: "cover",
};

const background4 = {
	backgroundImage: `url(${slider_4})`,
	backgroundRepeat: "none",
	backgroundSize: "cover",
	backgroundPosition: "cover",
};

const blue = {
	100: "#DAECFF",
	200: "#99CCF3",
	400: "#3399FF",
	500: "#007FFF",
	600: "#0072E5",
	900: "#003A75",
};

const grey = {
	50: "#f6f8fa",
	100: "#eaeef2",
	200: "#d0d7de",
	300: "#afb8c1",
	400: "#8c959f",
	500: "#6e7781",
	600: "#57606a",
	700: "#424a53",
	800: "#32383f",
	900: "#24292f",
};

// const StyledButton = styled("button")(
//   ({ theme }) => `
//   font-family: IBM Plex Sans, sans-serif;
//   font-size: 0.875rem;
//   box-sizing: border-box;
//   min-height: calc(1.5em + 22px);
//   min-width: 320px;
//   padding: 12px;
//   border-radius: 12px;
//   text-align: left;
//   line-height: 1.5;
//   background: ${theme.palette.mode === "dark" ? grey[900] : "#fff"};
//   border: 1px solid ${theme.palette.mode === "dark" ? grey[700] : grey[200]};
//   color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
//   transition-property: all;
//   transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
//   transition-duration: 120ms;
//   &:hover {
//     background: ${theme.palette.mode === "dark" ? grey[800] : grey[50]};
//     border-color: ${theme.palette.mode === "dark" ? grey[600] : grey[300]};
//   }
//   &.${selectUnstyledClasses.focusVisible} {
//     border-color: ${blue[400]};
//     outline: 3px solid ${theme.palette.mode === "dark" ? blue[500] : blue[200]};
//   }
//   &.${selectUnstyledClasses.expanded} {
//     &::after {
//       content: '▴';
//     }
//   }
//   &::after {
//     content: '▾';
//     float: right;
//   }
//   `
// );

const StyledListbox = styled("ul")(
	({ theme }) => `
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem;
  box-sizing: border-box;
  padding: 6px;
  margin: 12px 0;
  min-width: 320px;
  border-radius: 12px;
  overflow: auto;
  outline: 0px;
  background: ${theme.palette.mode === "dark" ? grey[900] : "#fff"};
  border: 1px solid ${
		theme.palette.mode === "dark" ? grey[700] : grey[200]
  };
  color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
  box-shadow: 0px 4px 30px ${
		theme.palette.mode === "dark" ? grey[900] : grey[200]
  };
  `,
);

// const StyledOption = styled(OptionUnstyled)(
//   ({ theme }) => `
//   list-style: none;
//   padding: 8px;
//   border-radius: 8px;
//   cursor: default;
//   &:last-of-type {
//     border-bottom: none;
//   }
//   &.${optionUnstyledClasses.selected} {
//     background-color: ${theme.palette.mode === "dark" ? blue[900] : blue[100]};
//     color: ${theme.palette.mode === "dark" ? blue[100] : blue[900]};
//   }
//   &.${optionUnstyledClasses.highlighted} {
//     background-color: ${theme.palette.mode === "dark" ? grey[800] : grey[100]};
//     color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
//   }
//   &.${optionUnstyledClasses.highlighted}.${optionUnstyledClasses.selected} {
//     background-color: ${theme.palette.mode === "dark" ? blue[900] : blue[100]};
//     color: ${theme.palette.mode === "dark" ? blue[100] : blue[900]};
//   }
//   &.${optionUnstyledClasses.disabled} {
//     color: ${theme.palette.mode === "dark" ? grey[700] : grey[400]};
//   }
//   &:hover:not(.${optionUnstyledClasses.disabled}) {
//     background-color: ${theme.palette.mode === "dark" ? grey[800] : grey[100]};
//     color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
//   }
//   `
// );

const StyledGroupRoot = styled("li")`
	list-style: none;
`;

const StyledGroupHeader = styled("span")`
	display: block;
	padding: 15px 0 5px 10px;
	font-size: 0.75em;
	font-weight: 600;
	text-transform: uppercase;
	letter-spacing: 0.05rem;
	color: ${grey[600]};
`;

const StyledGroupOptions = styled("ul")`
	list-style: none;
	margin-left: 0;
	padding: 0;
	> li {
		padding-left: 20px;
	}
`;

// const StyledPopper = styled(PopperUnstyled)`
//   z-index: 1;
// `;

// function CustomSelect(props) {
//   const slots = {
//     root: StyledButton,
//     listbox: StyledListbox,
//     popper: StyledPopper,
//     ...props.slots,
//   };

//   return <SelectUnstyled {...props} slots={slots} />;
// }

// CustomSelect.propTypes = {
//   /**
//    * The components used for each slot inside the Select.
//    * Either a string to use a HTML element or a component.
//    * @default {}
//    */
//   slots: PropTypes.shape({
//     listbox: PropTypes.elementType,
//     popper: PropTypes.func,
//     root: PropTypes.elementType,
//   }),
// };

// const CustomOptionGroup = React.forwardRef(function CustomOptionGroup(
//   props,
//   ref
// ) {
//   const slots = {
//     root: StyledGroupRoot,
//     label: StyledGroupHeader,
//     list: StyledGroupOptions,
//     ...props.slots,
//   };

//   return <OptionGroupUnstyled {...props} ref={ref} slots={slots} />;
// });

// CustomOptionGroup.propTypes = {
//   /**
//    * The components used for each slot inside the OptionGroupUnstyled.
//    * Either a string to use a HTML element or a component.
//    * @default {}
//    */
//   slots: PropTypes.shape({
//     label: PropTypes.elementType,
//     list: PropTypes.elementType,
//     root: PropTypes.elementType,
//   }),
// };

export default function UpdateProduct() {
	const [category, setCategory] = React.useState([]);
	console.log(
		"🚀 ~ file: index.jsx:228 ~ AddProduct ~ category",
		category,
	);
	const [mainCategory, setMainCategory] = React.useState([]);
	const [parent, setParent] = React.useState();
	console.log("🚀 ~ file: index.jsx:230 ~ AddProduct ~ parent", parent);
	const [image, setImage] = React.useState(false);
	console.log("🚀 ~ file: index.jsx:232 ~ AddProduct ~ image", image);
	const [isMen, setIsMen] = React.useState(false);
	const params = useParams();
	const productId = params.id;
	const [product, setProduct] = React.useState({
		name: "",
		price: "",
		color: "",
		size: "",
		// gender: "female",
		// categories: "",
		productImage: "",
		description: "",
	});
	//   useEffect(() => {
	//     const getMainCategory = async () => {
	//       await axios
	//         .get(`http://localhost:5000/api/MainCategory/`)
	//         .then((res) => {
	//           console.log(res);
	//           setMainCategory(res.data.data);
	//         })
	//         .catch((err) => {
	//           console.log(
	//             "🚀 ~ file: index.jsx:252 ~ getAllCategory ~ err",
	//             err.massage
	//           );
	//         });
	//     };
	//     const getAllCategory = async () => {
	//       await axios
	//         .post(`http://localhost:5000/api/IdSubCategory/`, { parent: parent })
	//         .then((res) => {
	//           console.log(res);
	//           setCategory(res.data.data);
	//         })
	//         .catch((err) => {
	//           console.log(
	//             "🚀 ~ file: index.jsx:252 ~ getAllCategory ~ err",
	//             err.massage
	//           );
	//         });
	//     };

	//     getMainCategory();
	//     if (parent) {
	//       getAllCategory();
	//     } else {
	//     }
	//   }, [parent]);

	const onClickAdd = async (e) => {
		e.preventDefault();
		if (
			product.name === "" ||
			product.price === "" ||
			product.color === ""
		) {
			alert("Fill all the fields");
		} else {
			try {
				const res = await axios.post(
					"/api/product/create",
					product,
				);
				console.log(res);
				// toast.success(res.data.message);
			} catch (err) {
				console.log(err);
				// toast.error(err.response.data.message);
			}
		}
	};
	React.useState(() => {
		fetchData();
	});

	async function fetchData() {
		const response = await axios.get(`/api/product/get/${productId}`);
		setProduct(response.data.data);
	}
	const handleImage = async (e) => {
		e.preventDefault();
		try {
			const file = e.target.files[0];
			if (!file) return alert("File not exist.");
			if (file.size > 1024 * 1024)
				// 1mb
				return alert("Size too large!");
			if (file.type !== "image/jpeg" && file.type !== "image/png")
				// 1mb
				return alert("File format is incorrect.");
			let formData = new FormData();
			formData.append("file", file);

			const res = await axios.post(
				"/api/categoryImageUpload",
				formData,
				{
					headers: {
						"content-type": "multipart/form-data",
					},
				},
			);
			setImage(res.data.url);
			setProduct({
				...product,
				productImage: res.data.url,
			});
			// toast.success(res.data.message);
		} catch (err) {
			// toast.error(err.response.data.msg);
		}
	};
	const womenOptions = ["w opt1", "w opt2", "w opt3", "w opt4"];
	const menOptions = ["opt1", "opt2", "opt3", "opt4"];

	const handleSelect = (event) => {
		setProduct({
			...product,
			categories: event.target.value,
		});
	};
	const mainHandleSelect = (event) => {
		setParent(event.target.value);
	};
	const onChangeGender = (event) => {
		setProduct({
			...product,
			gender: event.target.value,
		});
		if (event.target.value === "female") {
			setIsMen(false);
		} else {
			setIsMen(true);
		}
	};

	const onChangeInput = (e) => {
		setProduct({
			...product,
			[e.target.name]: e.target.value,
		});
	};
	return (
		<div>
			<Box
				padding={"40px"}
				sx={{
					background: "white",
					width: "auto",
					height: "auto",
					margin: "20px",
				}}
				fullWidth>
				<Box
					padding={"10px"}
					sx={{
						background: "white",
						width: "auto",
						height: "auto",
						margin: "5px",
					}}
					fullWidth>
					<Typography
						padding={"3px"}
						variant="h5"
						gutterBottom
						sx={{
							background: "white",
							textAlign: "center",
							fontWeight: "bold",
						}}>
						Update Product
					</Typography>

					<hr color="black"></hr>
				</Box>
				<Grid container>
					<Grid item xs={6}>
						<Grid
							container
							direction="row"
							justifyContent="flex-start"
							alignItems="center">
							<Box
								padding={"20px"}
								sx={{
									background: "white",
									height: "auto",
									margin: "10px",
								}}
								fullWidth>
								<Grid
									container
									direction="row"
									justifyContent="center">
									<Grid
										xs={6}
										sx={{ background: "white" }}
										container
										direction="row"
										justifyContent="center"
										alignItems="center">
										<Typography
											padding={"3px"}
											variant="h7"
											gutterBottom
											sx={{
												background: "white",
												textAlign: "center",
												fontWeight: "bold",
											}}>
											Product Name
										</Typography>
									</Grid>
									<Grid
										xs={6}
										sx={{ background: "white" }}
										container
										direction="row"
										justifyContent="flex-start"
										alignItems="center">
										<TextField
											label="Name"
											id="outlined-size-small"
											value={product.name}
											size="small"
											onChange={(e) =>
												onChangeInput(e)
											}
											name="name"
										/>
									</Grid>
								</Grid>
								<br />
								<Grid
									container
									direction="row"
									justifyContent="center">
									<Grid
										xs={6}
										sx={{ background: "white" }}
										container
										direction="row"
										justifyContent="center"
										alignItems="center">
										<Typography
											padding={"3px"}
											variant="h7"
											gutterBottom
											sx={{
												background: "white",
												textAlign: "center",
												fontWeight: "bold",
											}}>
											Product Price
										</Typography>
									</Grid>
									<Grid
										xs={6}
										sx={{ background: "white" }}
										container
										direction="row"
										justifyContent="flex-start"
										alignItems="center">
										<TextField
											label="Price"
											id="outlined-size-small"
											value={product.price}
											size="small"
											onChange={(e) =>
												onChangeInput(e)
											}
											name="price"
										/>
									</Grid>
								</Grid>
								<br />
								<Grid
									container
									direction="row"
									justifyContent="center">
									<Grid
										xs={6}
										sx={{ background: "white" }}
										container
										direction="row"
										justifyContent="center"
										alignItems="center">
										<Typography
											padding={"3px"}
											variant="h7"
											gutterBottom
											sx={{
												background: "white",
												textAlign: "center",
												fontWeight: "bold",
											}}>
											Discription
										</Typography>
									</Grid>
									<Grid
										xs={6}
										sx={{ background: "white" }}
										container
										direction="row"
										justifyContent="flex-start"
										alignItems="center">
										<TextField
											label="Description"
											id="outlined-size-small"
											value={product.color}
											size="small"
											onChange={(e) =>
												onChangeInput(e)
											}
											name="color"
										/>
									</Grid>
								</Grid>
								<br />
								<Grid
									container
									direction="row"
									justifyContent="center">
									<Grid
										xs={6}
										sx={{ background: "white" }}
										container
										direction="row"
										justifyContent="center"
										alignItems="center">
										<Typography
											padding={"3px"}
											variant="h7"
											gutterBottom
											sx={{
												background: "white",
												textAlign: "center",
												fontWeight: "bold",
											}}>
											Product Quantity
										</Typography>
									</Grid>
									<Grid
										xs={6}
										sx={{ background: "white" }}
										container
										direction="row"
										justifyContent="flex-start"
										alignItems="center">
										<TextField
											label="Qty"
											id="outlined-size-small"
											value={product.size}
											size="small"
											onChange={(e) =>
												onChangeInput(e)
											}
											name="size"
										/>
									</Grid>
								</Grid>
								<br />
								{/* <Grid container direction="row" justifyContent="center">
              <Grid
                xs={6}
                sx={{ background: "white" }}
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
              >
                <Typography
                  padding={"3px"}
                  variant="h7"
                  gutterBottom
                  sx={{
                    background: "white",
                    textAlign: "center",
                    fontWeight: "bold",
                  }}
                >
                 Main Category Name
                </Typography>
              </Grid>
              <Grid
                xs={6}
                sx={{ background: "white" }}
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
              >
           <Select value={product.category} onChange={mainHandleSelect}>
                  {mainCategory.map((category,index) => (
                      <MenuItem key={index} value={category._id}>
                        {category.name}
                      </MenuItem>
                      ))}
                
            </Select>
              </Grid>
            </Grid> */}
								<br />
								{/* <Grid container direction="row" justifyContent="center">
              <Grid
                xs={6}
                sx={{ background: "white" }}
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
              >
                <Typography
                  padding={"3px"}
                  variant="h7"
                  gutterBottom
                  sx={{
                    background: "white",
                    textAlign: "center",
                    fontWeight: "bold",
                  }}
                >
                   Sub Category Name
                </Typography>
              </Grid>
              <Grid
                xs={6}
                sx={{ background: "white" }}
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
              >
                <Select value={product.category} onChange={handleSelect}>
                  {category.map((category,index) => (
                      <MenuItem key={index} value={category._id}>
                        {category.name}
                      </MenuItem>
                      ))}
                
                </Select>
              </Grid>
            </Grid> */}
								<br />
								<Grid
									container
									direction="row"
									justifyContent="center">
									<Grid
										xs={6}
										sx={{ background: "white" }}
										container
										direction="row"
										justifyContent="center"
										alignItems="center">
										<Typography
											padding={"3px"}
											variant="h7"
											gutterBottom
											sx={{
												background: "white",
												textAlign: "center",
												fontWeight: "bold",
											}}>
											Product Image
										</Typography>
									</Grid>
									<Grid
										xs={6}
										sx={{ background: "white" }}
										container
										direction="row"
										justifyContent="flex-start"
										alignItems="center">
										<ImageUploadButton component="label">
											<input
												type="file"
												hidden
												onChange={handleImage}
											/>
											{image ? (
												<Box
													sx={{
														minWidth: 400,
														maxWidth: 400,
													}}>
													<img
														alt="forum_post"
														src={
															product.productImage
														}
														style={{
															height: 600,
															width: 600,
															objectFit:
																"cover",
														}}
													/>
												</Box>
											) : (
												<ImageOutlinedIcon
													sx={{
														minHeight: 400,
														minWidth: 400,
													}}
												/>
											)}
										</ImageUploadButton>
									</Grid>
								</Grid>
								<br />
								<Grid
									xs={8}
									sx={{ background: "white" }}
									container
									direction="row"
									justifyContent="center"
									alignItems="flex-start">
									<Typography
										padding={"3px"}
										gutterBottom
										sx={{
											background: "white",
											textAlign: "center",
											fontSize: "10px",
										}}>
										JPEG, PNG, SVG or GIF <br />
										(Maximum file size 50MB)
									</Typography>
								</Grid>
							</Box>
						</Grid>

						<Grid
							container
							direction="row"
							justifyContent="center"
							alignItems="center">
							<Button
								variant="contained"
								sx={{
									background: "#5ebc67",
									hover: "red",
								}}
								onClick={onClickAdd}>
								Update Product
							</Button>
						</Grid>
					</Grid>
					<Grid item xs={6}>
						<div
							style={{
								marginTop: "0px",
								marginBottom: "-10px",
							}}>
							<>
								<Carousel
									autoplay
									effect="fade"
									dotPosition="right"
									style={{
										marginBottom: "0px",
										padding: "0px",
									}}>
									<div>
										<h6
											style={{
												...contentStyle,
												...background1,
											}}>
											<b>Sigiriya</b> Lion Rock is an
											ancient rock fortress known for
											its massive column of rock that
											reaches nearly 200 meters high.
											The site dates back to the
											reign of King Kasyapa (477-495
											AD), who chose this site as his
											new capital. He decorated the
											walls with frescoes, and built
											an impressive palace right on
											top of the rock column,
											accessible only through the
											mouth of an enormous carved
											lion.
										</h6>
									</div>
									<div>
										<h6
											style={{
												...contentStyle,
												...background2,
											}}>
											<b>
												The Temple of the Sacred
												Tooth Relic{" "}
											</b>{" "}
											is a world-renowned place of
											worship, where the left Canine
											tooth of Gautama Buddha is
											enshrined. The temple which is
											venerated by thousands of local
											& foreign devotees and tourists
											daily was named as a world
											heritage by UNESCO in 1988.
										</h6>
									</div>
									<div>
										<h6
											style={{
												...contentStyle,
												...background3,
											}}>
											<b>Bentota</b> is a tourist
											attraction, with a local
											airport (Bentota River Airport)
											and a handful of world-class
											hotels. It is a destination for
											watersports. Bentota also
											delivers an ancient art of
											healing called Ayurveda.
											Bentota is famous for its toddy
											production, an alcoholic
											beverage made out of coconut
											nectar. It also has a turtle
											hatchery, located on Induruwa
											beach.
										</h6>
									</div>
									<div>
										<h6
											style={{
												...contentStyle,
												...background4,
											}}>
											<b>The Nine Arch Bridge,</b>{" "}
											also known as the ‘Bridge in
											the Sky’ was constructed by
											connecting two bog mountains
											when constructing the Badulla –
											Colombo railway. This bridge is
											300 feet in length, 25 feet in
											width and 80-100 feet in
											height. It is one of the best
											examples of colonial-era
											railway construction in the
											country.
										</h6>
									</div>
								</Carousel>
							</>
						</div>
					</Grid>
				</Grid>
			</Box>
		</div>
	);
}
