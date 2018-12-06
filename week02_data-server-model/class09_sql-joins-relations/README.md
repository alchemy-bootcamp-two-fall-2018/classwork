Class 9: SQL Joins & Relations
===

## Kickoff

* Kata Review
* Lab Review
* ?
* Working Incrementally

## Naming

* SQL land use `snake_case`
* JavaScript (including JSON) use `camelCase`
* routes (url paths) use `kebob-case`
* files and folders
    * ~~`kebob-case`~~
    * `camelCase` or `TitleCase` if component

Routes:

1. Nouns, **no actions or verbs**
1. Use plural: `/api/students`
1. Refine the resource as parts are added: 
    * `/api/students/23`
    * `/api/students/23/classes`

## Consolidate `pg` client

Single module for managing `postgres` connection

## Learning Objectives

* Understand how objects in a database can be interrelated with foreign keys
* Have familiarity with queries using SQL that select data from across multiple tables
* Have familiarity with different relationships in database tables

## JOINS

[slides...](./sql-joins.pdf)

## Database Normalization

* Remove duplicate data.
* Minimize database redesign.
* Minimize modification anomalies.

## Database Relationships

* `1:1` Relationship
* `1:Many` / `Many:1` Relationship
* `Many:Many` Relationship

## Joins

* Understanding Primary and Foreign Keys
    * Discuss how these keys are related and can be used for database normalization
* Inner Join
    * Discuss syntax
    * Discuss concepts

## Tooling

* Common `pg` `client` module
* Loading seed data