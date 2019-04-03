import GetFood from '../controller/GetFood'

const foodRoutes = (version, app) => {
  app.get('/', (req, res) => {
    res.status(200).json({
      message: 'Welcome to my meal app'
    })
  });
  app.get(`${version}/food`, GetFood.getMeals);
};

export default foodRoutes;
