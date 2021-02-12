<template>
    <div class="flex flex-col space-y-4">
        <div class="text-2xl">About</div>
        <div class="p-4">
            Describo was first developed for the UTS eResearch Team as a proof of concept tool for
            creating and managing Research Object Crates. The Minimum Viable Product that was
            created proved to be so effective that it has now formed the basis of the description
            activities being undertaken by the CS3MESH4EOSC Work Package 4. In addition, it will
            form a key component of the next generation PARADISEC catalog.
        </div>
        <div class="flex flex-col space-y-4">
            <div class="flex flex-row justify-around">
                <div class="p-6">
                    <a href="https://uts.edu.au/" target="_blank">
                        <img src="images/logo-uts.svg" class="h-12" />
                    </a>
                </div>
                <div class="p-6">
                    <a href="https://paradisec.org.au/" target="_blank">
                        <img src="images/logo-paradisec.png" class="h-12" />
                    </a>
                </div>
            </div>
            <div class="flex flex-row justify-around">
                <div class="p-6 bg-black">
                    <a href="https://cs3mesh4eosc.eu/" target="_blank">
                        <img src="images/logo-cs3mesh4eosc.png" class="h-8" />
                    </a>
                </div>
                <div class="p-6 bg-white">
                    <a href="https://www.psnc.pl" target="_blank">
                        <img src="images/logo-psnc.svg" class="h-8" />
                    </a>
                </div>
                <div class="p-4">
                    <img src="images/logo-eu.jpg" class="h-12" />
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {};
    },
};
</script>
