<?php

use App\Http\Controllers\Web\WebPageAction;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
*/

Route::get('/', WebPageAction::class)->name('welcome');
