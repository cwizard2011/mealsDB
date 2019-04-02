import request from 'request';

class GetFood {

    /**
     * 
     * @param {object} food takes the food object
     *
     * @returns {bool} returns a boolean value
     */
    static isIngredient(food) {
        const regex = /^strIngredient[\d]+$/
        return regex.test(food)
    }

    /**
     * @description makes an api call to themealdb.com
     *
     * @param {*} req 
     * @param {*} res response object
     * 
     * @returns {object} returns the meal with least ingredient
     */
    static getMeals(req, res) {
        request.get('https://www.themealdb.com/api/json/v1/1/latest.php', (error, response, body) => {
            if(error) {
                return res.status(400).json({error});
            } else {
                const foodList = JSON.parse(body)
                const meals = GetFood.getMealWithLeastIngredient(foodList.meals)
                if (meals.length < 1) {
                    return res.status(200).json({
                        message: 'No meal at the moment, try again'
                    })
                }
                return res.status(200).json({
                    meals
                })
            }
        })
    }

    /**
     * 
     * @param {*} meals takes an array of meal from the the API
     *
     * @returns {object} returns all mealId and meal Ingredients
     */
    static getMealIngredients(meals) {
        let ingredientList = {}
        meals.forEach(meal => {
            const mealId = meal.idMeal;
            ingredientList[mealId] = meal.idMeal;
            ingredientList[mealId] = {mealId: meal.idMeal, ingredients: [], length:0 };
            for(let mealIngredients in meal){
              if(GetFood.isIngredient(mealIngredients) && meal[mealIngredients] !== '')
              ingredientList[mealId].ingredients.push(meal[mealIngredients])
              ingredientList[mealId].length = ingredientList[mealId].ingredients.length
              
            }
           });
           return ingredientList
    }

    /**
     * 
     * @param {Array} mealList takes an array of meal
     * 
     * @returns {object} returns the meal object with least ingredient
     */
    static getMealWithLeastIngredient(mealList) {
        const allMeals = GetFood.getMealIngredients(mealList)
        let leastIngredientNo = Number.MAX_VALUE
        let leastIngredientMeal = [];
        for (let food in allMeals) {
            if (allMeals[food].length < leastIngredientNo) {
                leastIngredientNo = allMeals[food].length
            }
        }
        for (let food in allMeals) {
            if (allMeals[food].length === leastIngredientNo) {
                delete allMeals[food].length
                leastIngredientMeal.push(allMeals[food])
            }
        }

        return leastIngredientMeal
    }
}

export default GetFood