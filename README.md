# @ngrx/data lazy loaded module config

## Description

I am trying to use ngrx/data in an NX workspace with multiple libraries and applications

I want to create feature modules that applications can import, possibly also into lazy loaded modules.

I have a backend that handles pagination and want to incorporate this functionality into ngrx/data

To do this I want to use a custom data service, a custom persistence handler and a custom reducer factory.

The issues I am running into are:

- While I got this working in my nx workspace, in this minimal reproduction example, I cannot get ngrx/data to use my custom data service.
- Based on the documentation I assume that I will need to import the LazyPostFeatureModule in my app.module.ts file for the provider overrides to take effect. Is there any way that allows me to use a custom persistence handler and a custom reducer factory while supporting the module being lazy loaded
- As standalone APIs become more popular in Angular, is there a way to set up a standalone LazyPostService and configure it in the same way without using an NgModule

## Stackblitz ⚡️

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/angular-ivy-hx2ur7)
