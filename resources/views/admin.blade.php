<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <title inertia>{{ config('app.name') }}</title>

  @routes
  @viteReactRefresh
  @vite(['resources/react/admin/admin.tsx', "resources/react/admin/Pages/{$page['component']}.tsx"])
  @inertiaHead
</head>
<body>
@inertia
</body>
</html>