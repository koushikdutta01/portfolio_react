# Mastering Java Exception Handling

Exception handling is not just about stopping crashes; it's about building resilient systems. In the world of **Spring Boot 3**, we have moved beyond simple try-catch blocks.

## Checked vs Unchecked
Most modern Java frameworks prefer **Unchecked Exceptions** (RuntimeException). Why? Because it keeps the method signatures clean and separates the business logic from the error handling.

## Global Exception Handling
Using `@ControllerAdvice` and `@ExceptionHandler`, we can centralize all error logic:

```java
@ExceptionHandler(UserNotFoundException.class)
public ResponseEntity<ErrorResponse> handleUserNotFound(UserNotFoundException ex) {
    return new ResponseEntity<>(new ErrorResponse("USER_NOT_FOUND", ex.getMessage()), HttpStatus.NOT_FOUND);
}
```

This ensures that your API always returns a consistent JSON structure, even when things go wrong.
