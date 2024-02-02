<template>
    <nav class="navbar navbar-expand-md bg-light-subtle rounded">
        <div class="container-fluid">
            <a class="navbar-brand display-6" href="#">Mein Rennrad</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#bikeType"
                aria-controls="bikeType" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="bikeType">
                <ul class="navbar-nav me-auto">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">Komponenten</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Zubehör</a>
                    </li>
                </ul>
                <form class="d-flex"><button type="button" class="btn btn-sm btn-outline-secondary" aria-label="Baugruppe
                                    hinzufügen">Baugruppe
                        hinzufügen</button></form>
            </div>
        </div>
    </nav>
</template>