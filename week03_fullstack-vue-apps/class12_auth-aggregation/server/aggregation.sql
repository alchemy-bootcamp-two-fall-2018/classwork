select pet_id as "petId", 
  min(pet.name) as "petName",
  count(game.id), 
  avg(score) as "averageScore", 
  min(score) as "minimumScore", 
  max(score) as "maximumScore"
from game
join pet
on game.pet_id = pet.id
group by pet_id;


select 
  pet.id,
  pet.name,
  stats.*
from pet
join (
    select pet_id, 
      count(game.id), 
      avg(score), 
      min(score), 
      max(score)
    from game
    group by pet_id
) as stats
on pet.id = stats.pet_id;

select
  pet_id,
  max(score) as maxScore
from game
group by pet_id
order by maxScore DESC
limit 1;

select
  id, 
  pet_id, 
  score
from game
order by score DESC
limit 10;

select pet_id, 
  count(game.id), 
  avg(score), 
  min(score), 
  max(score)
from game
group by pet_id
having count(game.id) > 40;

select pet_id as "petId", 
  min(pet.name) as "petName",
  count(game.id), 
  avg(score) as "averageScore", 
  min(score) as "minimumScore", 
  max(score) as "maximumScore"
from game
join pet
on game.pet_id = pet.id
where pet.profile_id = 1
group by pet_id
order by "averageScore" DESC;