SET @addition_uuid = UUID();
INSERT INTO additions (id, result)
VALUES (@addition_uuid, 7.0);
INSERT INTO addition_addends (addends, addition_id)
VALUES (1.0, @addition_uuid);
INSERT INTO addition_addends (addends, addition_id)
VALUES (4.0, @addition_uuid);
INSERT INTO addition_addends (addends, addition_id)
VALUES (2.0, @addition_uuid);

SET @subtraction_uuid = UUID();
INSERT INTO subtractions (id, minuend, result)
VALUES (@subtraction_uuid, 5.0 , -2.0);
INSERT INTO subtraction_subtrahends (subtrahends, subtraction_id)
VALUES (3.0, @subtraction_uuid);
INSERT INTO subtraction_subtrahends (subtrahends, subtraction_id)
VALUES (4.0, @subtraction_uuid);

INSERT INTO multiplications (id, multiplicand, multiplier, result)
VALUES (UUID(), 2.0, 3.0, 6.0);

INSERT INTO divisions (id, dividend, divisor, result)
VALUES (UUID(), 3.0, 3.0, 1.0);

INSERT INTO roots (id, radicand, index, result)
VALUES (UUID(), 4.0, 2.0, 2.0);

INSERT INTO powers (id, base, power, result)
VALUES (UUID(), 2.0, 3.0, 4.0);