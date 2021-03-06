import React, { useEffect, Fragment } from 'react';
import { Link } from 'react-router-dom';
import _ from 'lodash';

import { Card, Container, Row, Col, Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { fetchStoreData } from '../../store/actions/store-actions';
import './styles.css';

const Stores = (props) => {
	const dispatch = useDispatch();
	const stores = useSelector((state) => state.store.stores);
	useEffect(() => {
		dispatch(fetchStoreData());
	}, [dispatch]);


	return (
		<React.Fragment>
			<Container className="p-3">
				<Row className="justify-content-md-center" xs={1} md={3}>

					{stores.map((store, i) => (
						<Fragment key={i}>
							<Col
								xs={12}
								sm={6}
								xl={3}
								lg={4}
								className="mb-3"
								style={{ display: 'block' }}

							>

								<Link style={{ textDecoration: 'none', color: 'black' }} to={`/stores/${store._id}/`}>

									<Card className="product-card">
										<Card.Img

											className="product-img"
											variant="top"
											src={store.image}
											alt={`dw ${Math.floor(Math.random() * 10) + 1}`}

										/>
										<Card.Body>
											<h4 className="card-title">{store.name}</h4>

											<Card.Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. </Card.Text>

											<div className="buy d-flex justify-content-between align-items-center">
												<Link to={`/stores/${store._id}/`}>

													<Button
														variant={'outline-primary'}
														// onClick={toggleAddProduct}
														className="add-to-cart mt-3"
													>
														<i className="fas fa-store"></i>{' '}
														{'Enter Store'}
													</Button>
												</Link>

											</div>
										</Card.Body>

									</Card>
								</Link>

							</Col>
						</Fragment>
					))}
				</Row>
				{
					stores.length === 0 && <Row className="justify-content-md-center mt-5" xs={1} md={3}>
						<p>No Stores Available</p>
					</Row>
				}

			</Container>
		</React.Fragment >
	);
}

export default Stores