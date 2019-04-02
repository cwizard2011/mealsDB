import GetFood from '../controller/GetFood'

const foodRoutes = (version, app) => {
  app.get(`${version}/food`, GetFood.getMeals);
};

export default foodRoutes;
