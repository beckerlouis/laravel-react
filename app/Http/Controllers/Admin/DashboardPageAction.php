<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DashboardPageAction extends Controller
{
    public function __invoke(Request $request): \Inertia\Response
    {
        return Inertia::render('Dashboard/Dashboard', [
            'seo' => __('admin/seo.dashboard'),
        ]);
    }
}
