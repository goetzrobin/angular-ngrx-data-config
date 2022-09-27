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

Here is how I tried to reproduce my scenario

- Created a lib directory containing the LazyPostFeatureModule
- Configure ngrx/data in this module
- Import it into the App module in app.module.ts for it to be eagerly loaded and providers to be overwritten correctly
- Have a lazy-post route that lazy loads the LazyPostModule (which also imports the LazyPostFeatureModule) and uses it to get the lazy posts from the BE

### Issues

- For some reason my custom api service is not used even though I am registering it in the constructor of my data service. The way I implemented it does work in my nx workspace project.
- I have to import the LazyPostFeatureModule in the app.module.ts file even though it is not used until it is lazy loaded
- I believe the issues stem from my lack of deep understanding of how DI works for lazy loaded modules and lack of understanding how ngrx/data uses custom DI to allow customization of it. If someone could clarify what is going on here or point me in the right direction that would be awesome. If/When I figure out how I can customize ngrx/data to my needs I will share my findings for others that are dealing with similar issues.

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/angular-ivy-hx2ur7)
