INSERT INTO sums (id, result) VALUES (1, 4);
INSERT INTO sums (id, result) VALUES (2, 6);
INSERT INTO addends (id, sum_id, addend) VALUES (1, 1, 2);
INSERT INTO addends (id, sum_id, addend) VALUES (2, 1, 2);
INSERT INTO addends (id, sum_id, addend) VALUES (3, 2, 2);
INSERT INTO addends (id, sum_id, addend) VALUES (4, 2, 2);
INSERT INTO addends (id, sum_id, addend) VALUES (5, 2, 2);

INSERT INTO substractions (id, minuend, result) VALUES (1, 2, 0);
INSERT INTO substractions (id, minuend, result) VALUES (2, 2, -2);
INSERT INTO substrahends (id, substraction_id, substrahend) VALUES (1, 1, 2);
INSERT INTO substrahends (id, substraction_id, substrahend) VALUES (2, 2, 2);
INSERT INTO substrahends (id, substraction_id, substrahend) VALUES (3, 2, 2);

INSERT INTO multiplications (id, multiplicand, multiplier, result) VALUES (1, 2, 2, 4);

INSERT INTO divisions (id, dividend, divisor, quotient, remainder) VALUES (1, 2, 2, 1, 0);

INSERT INTO roots (id, radicand, index, result) VALUES (1, 4, 2, 2);
INSERT INTO roots (id, radicand, index, result) VALUES (2, 8, 3, 2);

INSERT INTO powers (id, base, power, result) VALUES (1, 2, 2, 4);
INSERT INTO powers (id, base, power, result) VALUES (2, 3, 3, 27);
INSERT INTO powers (id, base, power, result) VALUES (3, 4, 4, 256);

