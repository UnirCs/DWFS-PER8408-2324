#1. Obtener el número de hombres y mujeres de la base de datos. Ordenar de forma descendente.
select (CASE
          WHEN e.gender = 'M' THEN
              'Hombres'
          ELSE
              'Mujeres'
       END) AS genero,
       COUNT(1) AS cantidad
from employees.employees e
GROUP BY e.gender
ORDER BY e.gender DESC;


#2. Mostrar el nombre, apellido y salario de la persona mejor pagada de un departamento concreto (parámetro variable).
SET @codigoDpto = 'd005';

SELECT t.emp_no,
       t.first_name,
       t.last_name,
       t.salario#,
       #t.dept_no
  FROM (select e.emp_no,
               e.first_name,
               e.last_name,
               d.dept_no,
               s.salary AS salario,
               ROW_NUMBER() OVER(PARTITION BY d.dept_no ORDER BY s.salary DESC) AS row_num
        from employees.employees e
        INNER JOIN employees.salaries s
           ON s.emp_no = e.emp_no
        INNER JOIN employees.dept_emp de
           ON de.emp_no = e.emp_no
        INNER JOIN employees.departments d
           ON d.dept_no = de.dept_no
        WHERE d.dept_no = @codigoDpto) t
 WHERE t.row_num = 1;

/*SELECT d.*
  FROM employees.departments d;

SELECT t.emp_no,
       t.salario
  FROM (select e.emp_no,
               MAX(s.salary) AS salario
          from employees.employees e
         INNER JOIN employees.salaries s
            ON s.emp_no = e.emp_no
         INNER JOIN employees.dept_emp de
            ON de.emp_no = e.emp_no
         INNER JOIN employees.departments d
            ON d.dept_no = de.dept_no
         WHERE d.dept_no = 'd005'
         GROUP BY e.emp_no) t
  ORDER BY t.salario DESC;*/;


#3. Mostrar el nombre, apellido y salario de la segunda persona mejor pagada de un departamento concreto (parámetro variable).
SET @codigoDpto = 'd005';

SELECT t.first_name,
       t.last_name,
       t.salario
  FROM (select e.emp_no,
               e.first_name,
               e.last_name,
               d.dept_no,
               s.salary AS salario,
               ROW_NUMBER() OVER(PARTITION BY d.dept_no ORDER BY s.salary DESC) AS row_num
        from employees.employees e
        INNER JOIN employees.salaries s
           ON s.emp_no = e.emp_no
        INNER JOIN employees.dept_emp de
           ON de.emp_no = e.emp_no
        INNER JOIN employees.departments d
           ON d.dept_no = de.dept_no
        WHERE d.dept_no = @codigoDpto) t
 WHERE t.row_num = 2;


#4. Mostrar el número de empleados contratados en un mes concreto (parámetro variable).
SET lc_time_names = 'es_ES';
SET @mes_contratacion = 6;

SELECT DATE_FORMAT(e.hire_date, '%Y%m') AS MES_contratacion,
       COUNT(e.emp_no) AS cantidad
  FROM employees.employees e
 WHERE MONTH(e.hire_date) = @mes_contratacion
 GROUP BY DATE_FORMAT(e.hire_date, '%Y%m')
 ORDER BY DATE_FORMAT(e.hire_date, '%Y%m');