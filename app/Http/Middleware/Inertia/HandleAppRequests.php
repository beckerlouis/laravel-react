<?php

namespace App\Http\Middleware\Inertia;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Middleware;
use Throwable;
use Tightenco\Ziggy\Ziggy;

class HandleAppRequests extends Middleware
{
  /**
   * The root template that is loaded on the first page visit.
   *
   * @var string
   */
  protected $rootView = 'app';

  /**
   * Determine the current asset version.
   */
  public function version(Request $request): string|null
  {
    return parent::version($request);
  }

  /**
   * Define the props that are shared by default.
   *
   * @return array<string, mixed>
   */
  public function share(Request $request): array
  {
    return array_merge(parent::share($request), [
      'user' => $request->user() ? $request->user()->toArray() : null,
      'flash' => [
        'success' => $request->session()->get('success'),
        'error' => $request->session()->get('error'),
      ],
      'ziggy' => function () use ($request) {
        return array_merge((new Ziggy)->toArray(), [
          'location' => $request->url(),
        ]);
      },
    ]);
  }

  /**
   * Prepare exception for rendering.
   *
   * @param \Throwable $e
   * @return \Illuminate\Http\JsonResponse|\Symfony\Component\HttpFoundation\Response
   */
  public function render($request, Throwable $e)
  {
    $response = parent::render($request, $e);

    if (!app()->environment(['local', 'testing']) && in_array($response->status(), [500, 503, 404, 403])) {
      return Inertia::render('Error', ['status' => $response->status()])
        ->toResponse($request)
        ->setStatusCode($response->status());
    } elseif ($response->status() === 419) {
      return back()->with([
        'message' => 'The page expired, please try again.',
      ]);
    }

    return $response;
  }
}
