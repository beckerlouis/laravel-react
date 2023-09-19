<?php

use App\Http\Controllers\Admin\DashboardPageAction;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Admin Routes
|--------------------------------------------------------------------------
*/

Route::middleware('auth')->group(function () {
    Route::get('/', DashboardPageAction::class)->name('app');
});

require __DIR__.'/check.php';
