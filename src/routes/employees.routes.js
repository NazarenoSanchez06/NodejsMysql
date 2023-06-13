import {Router} from "express"; 
import { getEmployees,getEmployee,createEmployees,updateEmployees,deleteEmpoyees } from "../controllers/employees.controllers.js";

const router = Router()
router.get('/empleados' ,getEmployees);

router.get('/empleados/:id' ,getEmployee);

router.post('/empleados',createEmployees);

router.patch('/empleados/:id' ,updateEmployees );

router.delete('/empleados/:id',deleteEmpoyees);


export default router;


