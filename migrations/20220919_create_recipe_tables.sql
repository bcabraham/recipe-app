CREATE TABLE recipes (
	recipe_id integer PRIMARY KEY,
	title varchar(255),
	description text
);

CREATE TABLE ingredients (
	ingredient_id integer PRIMARY KEY,
	recipe_id integer REFERENCES recipes,
	name varchar(255),
	quantity varchar(255),
	units varchar(50),
	description text
);

CREATE TABLE recipe_steps (
	step_id integer PRIMARY KEY,
	recipe_id integer REFERENCES recipes,
	ingredient_id integer REFERENCES ingredients,
	sort_order integer,
	description text
);
