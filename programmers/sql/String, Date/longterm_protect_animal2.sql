SELECT ANIMAL_INS.ANIMAL_ID, ANIMAL_INS.NAME
FROM ANIMAL_INS INNER JOIN ANIMAL_OUTS
ON ANIMAL_INS.ANIMAL_ID = ANIMAL_OUTS.ANIMAL_ID
ORDER BY DATEDIFF(ANIMAL_INS.DATETIME, ANIMAL_OUTS.DATETIME) ASC
LIMIT 2;