<?php

namespace App\Http\Controllers\App\Account;

use App\Http\Controllers\Controller;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProfilePageAction extends Controller
{
    public function __invoke(Request $request): \Inertia\Response
    {
        return Inertia::render('Account/Profile', [
            'mustVerifyEmail' => $request->user() instanceof MustVerifyEmail,
            'status' => session('status'),
            'seo' => __('app/seo.account.profile'),
        ]);
    }
}
