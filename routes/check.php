<?php

use App\Http\Controllers\Auth\ConfirmablePasswordController;
use App\Http\Controllers\Auth\AuthenticatedSessionController;
use Illuminate\Support\Facades\Route;

Route::middleware('auth')->group(function () {
  Route::get('confirm-password', [ConfirmablePasswordController::class, 'show'])->name('password.confirm');
  Route::post('confirm-password', [ConfirmablePasswordController::class, 'store']);
  Route::get('logout', [AuthenticatedSessionController::class, 'destroy'])->name('logout');
});
