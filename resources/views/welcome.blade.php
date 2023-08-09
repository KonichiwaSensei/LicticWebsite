@extends('layouts/main')

@section('head')
    @viteReactRefresh
    @vite('resources/js/main.jsx')
@endsection

@section('content')

<div id="root">
  <h1>Loading...</h1>
</div>

@endsection