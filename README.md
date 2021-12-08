## Multiple providers in one module

How to use a service in the same module as an injectable?

-   add this service to the `providers` list of the module.

What if it should be consumed by other modules too?

-   add this service to the `exports` list of the module.

Example:

-   module `apartment` has services `ApartmentService` and `MailboxService`.
-   `apartment/ApartmentService` needs to use `apartment/MailboxService`
-   `delivery/DeliveryService` also needs to use `apartment/MailboxService`.

Lesson learned:

-   whatever you put in `providers` in any module, will be a unique dependency class, which will be instantiated when nestjs is bootstrapped.
    -   so if you accidentally put the same class into 2 modules `providers` list, that dependency will be instantiated twice, no longer a singleton.

Rule of Thumb:

-   do not import the services directly of another module, always import the entire module
-   the provider module should **export** the providers that need to be consumed outside
