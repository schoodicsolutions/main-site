<script>

	import Drawer from "./Drawer.svelte";
	import Logo from "./Logo.svelte";
	import Nav from "./Nav.svelte";
	import CloseIcon from "./icons/CloseIcon.svelte";
	import { drawerOpen } from "./stores";

</script>
<Drawer>
    <div class="px-12 py-3.5 mb-11">
        <div class="flex mb-9">
            <div class="w-12 h-12"></div>
            <div class="flex-grow flex items-center justify-center">
                <Logo variant="normal" size="small" />
            </div>
            <div class="w-12 h-12" >
                <button 
                    class="button icon text-black"
                    aria-haspopup="true"
                    aria-label="Close Menu"
                    on:click={() => $drawerOpen = !$drawerOpen}
                >
                    <CloseIcon />
                </button>
            </div>
        </div>
        <Nav variant="col" onNavigate={() => $drawerOpen = !$drawerOpen}/>
    </div>
    
</Drawer>