<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Providers\RouteServiceProvider;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\ValidationException;
use Inertia\Inertia;
use Inertia\Response;

class ConfirmablePasswordController extends Controller
{
  /**
   * Show the confirm password view.
   */
  public function show(): Response
  {
    $seo = [
      'title' => 'Confirm your password - laravel-react',
      'description' => '',
      'keywords' => ['keywords1', 'keywords2', 'keywords3'],
    ];

    return Inertia::render('Auth/ConfirmPassword', [
      'seo' => $seo,
    ]);
  }

  /**
   * Confirm the user's password.
   */
  public function store(Request $request): RedirectResponse
  {
    if (!Auth::guard('web')->validate([
      'email' => $request->user()->email,
      'password' => $request->password,
    ])) {
      throw ValidationException::withMessages([
        'password' => __('auth.password'),
      ]);
    }

    $request->session()->put('auth.password_confirmed_at', time());

    return redirect()->intended(RouteServiceProvider::HOME);
  }
}