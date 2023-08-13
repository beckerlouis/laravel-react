<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Providers\RouteServiceProvider;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class EmailVerificationPromptController extends Controller
{
  /**
   * Display the email verification prompt.
   */
  public function __invoke(Request $request): RedirectResponse|Response
  {
    if ($request->user()->hasVerifiedEmail()) {
      return redirect()->intended(RouteServiceProvider::HOME);
    }

    $seo = [
      'title' => 'Verify your email - laravel-react',
      'description' => '',
      'keywords' => ['keywords1', 'keywords2', 'keywords3'],
    ];

    return Inertia::render('Auth/VerifyEmail', [
      'status' => session('status'),
      'seo' => $seo,
    ]);
  }
}