# Youth Arabská

Tento projekt je webová aplikace pro projekt Youth Arabská, postavená na **React**, **Vite** a **Tailwind CSS**.

## Požadavky

Před spuštěním se ujistěte, že máte nainstalované:
- [Node.js](https://nodejs.org/) (doporučena verze 18.x nebo novější)
- [pnpm](https://pnpm.io/) (projekt používá `pnpm` jako správce balíčků místo `npm`)

Pokud nemáte `pnpm` nainstalovaný, můžete ho nainstalovat globálně:
```bash
npm install -g pnpm
# nebo přes Corepack:
corepack enable
```

## Spuštění projektu

Následujte tyto kroky pro zprovoznění projektu na vašem počítači:

1. **Klonování repozitáře:**
   ```bash
   git clone https://github.com/gyarab/YouthArabska.git
   cd YouthArabska
   ```

2. **Instalace závislostí:**
   ```bash
   pnpm install
   ```

3. **Spuštění vývojového serveru:**
   ```bash
   pnpm dev
   ```
   Aplikace bude dostupná na adrese `http://localhost:5173`.

## Dostupné příkazy

- `pnpm dev` – spustí lokální vývojový server
- `pnpm build` – vytvoří produkční verzi aplikace ve složce `dist`
- `pnpm preview` – lokální náhled produkčního buildu
- `pnpm lint` – provede kontrolu kvality kódu (ESLint)

## Deployment

Projekt je nastaven pro automatické nasazení přes **GitHub Actions**. Při každém pushnutí do hlavní větve se spustí workflow, které aplikaci sestaví a nasadí.
