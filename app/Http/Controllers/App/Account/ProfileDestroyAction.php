<?php

namespace App\Http\Controllers\App\Account;

use App\Http\Controllers\Controller;
use App\Http\Requests\Account\ProfileDestroyRequest;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Redirect;

class ProfileDestroyAction extends Controller
{
    public function __invoke(ProfileDestroyRequest $request): RedirectResponse
    {
        $request->destroy();

        return Redirect::to('/');
    }
}
