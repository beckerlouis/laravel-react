<?php

use App\Http\Controllers\App\Account\ProfileDestroyAction;
use App\Http\Controllers\App\Account\ProfilePageAction;
use App\Http\Controllers\App\Account\ProfileUpdateAction;
use App\Http\Controllers\App\DashboardPageAction;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| App Routes
|--------------------------------------------------------------------------
*/

Route::middleware('auth')->group(function () {
    Route::middleware('verified')->group(function () {
        Route::get('/', DashboardPageAction::class)->name('app');

        Route::prefix('profile')->middleware('password.confirm')->group(function () {
            Route::get('/', ProfilePageAction::class)->name('profile');
            Route::post('/profile-update', ProfileUpdateAction::class)->name('profile.update');
            Route::delete('/profile-destroy', ProfileDestroyAction::class)->name('profile.destroy');
        });
    });
});

require __DIR__.'/auth.php';
require __DIR__.'/check.php';
