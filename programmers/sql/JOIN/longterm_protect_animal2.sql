SELECT INS.NAME, INS.DATETIME
FROM ANIMAL_INS INS LEFT JOIN ANIMAL_OUTS OUTS ON OUTS.ANIMAL_ID=INS.ANIMAL_ID
WHERE OUTS.DATETIME IS NULL
ORDER BY INS.DATETIME ASC
LIMIT 3;